import { type Node } from '@/global/types';

export const removeMarkdown = (markdown: string) => {
  return markdown?.replace(/\*\*(.*?)\*\*/g, '$1');
};

export const removeHtmlTags = (data: string) => {
  return data.replace(/<[^>]*>/g, '');
};

export const portableTextToMarkdown = (node: Node): string => {
  if (node._type === 'span') {
    let text = node.text;
    if (node.marks && node.marks.includes('strong')) {
      text = `**${text}**`;
    }
    return text;
  }
  if (Array.isArray(node.children)) {
    return node.children.map((child) => portableTextToMarkdown(child)).join('');
  }
  return '';
};

export const slugify = (text: string) => {
  text = text.toString().toLowerCase().trim();
  const sets = [
    { to: 'a', from: '[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶἀ]' },
    { to: 'c', from: '[ÇĆĈČ]' },
    { to: 'd', from: '[ÐĎĐÞ]' },
    { to: 'e', from: '[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]' },
    { to: 'g', from: '[ĜĞĢǴ]' },
    { to: 'h', from: '[ĤḦ]' },
    { to: 'i', from: '[ÌÍÎÏĨĪĮİỈỊ]' },
    { to: 'j', from: '[Ĵ]' },
    { to: 'ij', from: '[Ĳ]' },
    { to: 'k', from: '[Ķ]' },
    { to: 'l', from: '[ĹĻĽŁ]' },
    { to: 'm', from: '[Ḿ]' },
    { to: 'n', from: '[ÑŃŅŇ]' },
    { to: 'o', from: '[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]' },
    { to: 'oe', from: '[Œ]' },
    { to: 'p', from: '[ṕ]' },
    { to: 'r', from: '[ŔŖŘ]' },
    { to: 's', from: '[ßŚŜŞŠȘ]' },
    { to: 't', from: '[ŢŤ]' },
    { to: 'u', from: '[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]' },
    { to: 'w', from: '[ẂŴẀẄ]' },
    { to: 'x', from: '[ẍ]' },
    { to: 'y', from: '[ÝŶŸỲỴỶỸ]' },
    { to: 'z', from: '[ŹŻŽ]' },
    { to: '-', from: "[·/_,:;']" },
  ];
  sets.forEach(({ from, to }) => {
    text = text.replace(new RegExp(from, 'gi'), to);
  });
  return text
    .replace(/\s+/g, '-')
    .replace(/[^-a-zа-я\u0370-\u03ff\u1f00-\u1fff]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

function getChildrenText({ children = [] }: Node): string {
  return children.map((node) => (typeof node === 'string' ? node : node.text || '')).join('');
}

function getObjectPath(path: number[]): string[] {
  return path.length === 0 ? [] : ['subheadings'].concat(path.join('.subheadings.').split('.'));
}

function filterNode(abstractSyntaxTree: Node[], match: (node: Node) => boolean): Node[] {
  return abstractSyntaxTree.reduce((accumulator: Node[], node: Node) => {
    if (match(node)) accumulator.push(node);
    if (node.children) accumulator.push(...filterNode(node.children, match));
    return accumulator;
  }, []);
}

function getProperty(object: object, path: string[]): unknown {
  return path.reduce((previous, current) => previous[current] as object, object);
}

function findHeadings(abstractSyntaxTree: Node[]): Node[] {
  return filterNode(abstractSyntaxTree, (node) => /h\d/.test(node.style || '')).map((node) => {
    const text = getChildrenText(node);
    const slug = slugify(text);

    return { ...node, text, slug };
  });
}

function mapHeadings(headings: Node[], path: number[], outline: Node): Node[] {
  let lastLevel = 0;
  headings.forEach((heading) => {
    const level = Number(heading.style?.slice(1));
    heading.subheadings = [];

    if (level < lastLevel) for (let i = lastLevel; i >= level; i--) path.pop();
    else if (level === lastLevel) path.pop();

    const prop: Node = getProperty(outline, getObjectPath(path));
    prop.subheadings?.push(heading);
    path.push((prop.subheadings?.length || 0) - 1);
    lastLevel = level;
  });
  return headings;
}

export const generateTableOfContent = (abstractSyntaxTree: Node[]): Node[] => {
  const outline: Node = { subheadings: [] };
  const headings = findHeadings(abstractSyntaxTree);
  const path: number[] = [];
  mapHeadings(headings, path, outline);
  return outline.subheadings || ([] as Node[]);
};

export const smoothScroll = (e: React.MouseEvent, slug) => {
  e.preventDefault();
  const targetElement = document.querySelector(`#${slug}`);
  targetElement.scrollIntoView({ behavior: 'smooth' });
  history.pushState(null, '', `#${slug}`);
};

export const phoneValidation = (e: React.KeyboardEvent) => {
  if (
    ((e.metaKey || e.ctrlKey) && e.key === 'a') ||
    ((e.metaKey || e.ctrlKey) && e.key === 'a') ||
    ((e.metaKey || e.ctrlKey) && e.key === 'c') ||
    ((e.metaKey || e.ctrlKey) && e.key === 'x') ||
    ((e.metaKey || e.ctrlKey) && e.key === 'v') ||
    ((e.metaKey || e.ctrlKey) && e.key === 'z') ||
    e.key === 'ArrowLeft' ||
    e.key === 'ArrowRight' ||
    e.key === 'Home' ||
    e.key === 'End' ||
    e.key === 'Backspace' ||
    e.key === 'Delete' ||
    e.key === 'Enter' ||
    e.key === 'Tab'
  )
    return;

  const allowedCharactersPattern = /[0-9()_+\-\s]/;
  !allowedCharactersPattern.test(e.key) && e.preventDefault();
};

export const prettyfyDate = (date: Date) => {
  const dateFormat = new Date(date);
  return new Intl.DateTimeFormat('pl_PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateFormat);
};

export const formatBytes = (bytes) => {
  const KB = bytes / 1024;
  const MB = KB / 1024;
  if (MB >= 1) {
    return MB.toFixed(2) + 'MB';
  } else if (KB >= 1) {
    return KB.toFixed(2) + 'KB';
  }
  return bytes + 'B';
};
