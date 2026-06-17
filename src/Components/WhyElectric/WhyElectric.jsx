import './WhyElectric.css'

const WhyElectric = () => {
  const stats = [
    {
      id: 1,
      number: "0",
      suffix: "",
      label: "Tailpipe Emissions",
      description: "Clean driving with zero environmental impact"
    },
    {
      id: 2,
      number: "500",
      suffix: "+",
      label: "KM Range",
      description: "Drive long distances without range anxiety"
    },
    {
      id: 3,
      number: "3",
      suffix: "s",
      label: "0-100 Acceleration",
      description: "Instant torque for sports-car performance"
    },
    {
      id: 4,
      number: "80",
      suffix: "%",
      label: "Cheaper to Run",
      description: "Significant savings compared to petrol or diesel"
    }
  ];

  return (
    <section className="stats-section">
      <div className="container reveal">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={stat.id} className={`stat-item reveal delay-${(index + 1) * 100}`}>
              <div className="stat-number-box">
                <span className="stat-number">{stat.number}</span>
                {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
              </div>
              <h4 className="stat-label">{stat.label}</h4>
              <p className="stat-desc">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyElectric
