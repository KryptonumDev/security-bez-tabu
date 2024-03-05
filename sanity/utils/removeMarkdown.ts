export default (markdown: string) => {
  return markdown?.replace(/\*\*(.*?)\*\*/g, '$1')
}
