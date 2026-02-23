import { useEffect, useRef, useState } from 'react'

const FactCounter = () => {
  const stats = [
    {
      icon: 'flaticon-transport',
      count: 10000,
      suffix: '+',
      label: 'Parts in Stock'
    },
    {
      icon: 'flaticon-interface',
      count: 50,
      suffix: '+',
      label: 'Countries Served'
    },
    {
      icon: 'flaticon-man',
      count: 5000,
      suffix: '+',
      label: 'Happy Customers'
    },
    {
      icon: 'flaticon-trophy',
      count: 15,
      suffix: '+',
      label: 'Years Experience'
    }
  ]

  const CounterItem = ({ stat, index }) => {
    const ref = useRef(null)
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              setHasAnimated(true)
              const duration = 2000
              const steps = 60
              const increment = stat.count / steps
              const stepDuration = duration / steps
              
              let current = 0
              const timer = setInterval(() => {
                current += increment
                if (current >= stat.count) {
                  setCount(stat.count)
                  clearInterval(timer)
                } else {
                  setCount(Math.floor(current))
                }
              }, stepDuration)
            }
          })
        },
        { threshold: 0.5 }
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }
    }, [stat.count, hasAnimated])

    return (
      <div className="col-md-3 col-sm-6 col-xs-12 counter-column" ref={ref}>
        <div className="single-counter-content wow slideInUp" data-wow-delay={`${index * 200}ms`} data-wow-duration="1500ms">
          <div className="icon-box"><i className={stat.icon}></i></div>
          <article className="column wow fadeIn" data-wow-duration="0ms">
            <div className="count-outer">
              <span className="count-text">{count}{stat.suffix}</span>
            </div>
            <div className="text">{stat.label}</div>
          </article>
        </div>
      </div>
    )
  }

  return (
    <section className="fact-counter">
      <div className="container">
        <div className="row">
          {stats.map((stat, index) => (
            <CounterItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FactCounter

