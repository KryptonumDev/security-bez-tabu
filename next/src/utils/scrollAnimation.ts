const scrollAnimation = (isInView: boolean, delay=0) => ({
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
  },
  transition: {
    duration: .5,
    delay: delay,
  }
})

export default scrollAnimation;