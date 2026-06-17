import './FeaturedCars.css'
import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png'

const FeaturedCars = () => {
  const cars = [
    {
      id: 1,
      image: image1,
      model: "NIO ES8",
      type: "Electric SUV",
      specs: "580km range · 0-100 in 4.9s · AWD",
      price: "Starting ₹89L"
    },
    {
      id: 2,
      image: image2,
      model: "Lucid Air",
      type: "Electric Sedan",
      specs: "837km range · 0-100 in 2.5s · AWD",
      price: "Starting ₹1.2Cr"
    },
    {
      id: 3,
      image: image3,
      model: "NIO EC6",
      type: "Electric Coupe SUV",
      specs: "615km range · 0-100 in 4.5s · RWD",
      price: "Starting ₹75L"
    }
  ];

  return (
    <section id="explore" className="featured-section">
      <div className="container reveal">
        <h2 className="section-title">
          Featured <span className="text-red">Models</span>
        </h2>
        <p className="section-subtitle">
          Explore our curated selection of next-generation electric vehicles
        </p>

        <div className="cars-grid">
          {cars.map((car, index) => (
            <div key={car.id} className={`car-card reveal delay-${(index + 1) * 100}`}>
              <div className="car-image-container">
                <img src={car.image} alt={car.model} className="car-image" />
                <span className="car-type-badge">{car.type}</span>
              </div>
              <div className="car-info">
                <h3 className="car-model">{car.model}</h3>
                <p className="car-specs">{car.specs}</p>
                <div className="car-footer">
                  <span className="car-price">{car.price}</span>
                  <button className="btn-details">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCars
