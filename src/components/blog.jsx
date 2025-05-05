import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import '../assets/styles/blog.css';

const tourData = [
    {
      day: 1,
      title: "Arrival & City Exploration",
      date: "April 07, 2025",
      description: `Our adventure began with an early morning arrival at Ninoy Aquino International Airport in Manila. After clearing airport procedures smoothly, we made our way to DJM Dormitory to settle in and drop off our luggage, eat lunch and then rest for awhile. After resting and eager to explore, we headed out to discover the vibrant sights of the city.

We began our day in the historic district of Intramuros, the centuries-old walled city that serves as a living testament to Manila's colonial past. Our first stop was the iconic Fort Santiago, a well-preserved fortress filled with historical significance and stories of heroism. We then visited the majestic Manila Cathedral, admired for its grand architecture and spiritual atmosphere. Just a short walk away, we explored San Agustin Church, a UNESCO World Heritage Site known for its intricate design and cultural value.

To wrap up our first day, we headed to the SM Mall of Asia, one of the largest malls in the world. There, we enjoyed window shopping, dining, and scenic views by the bay. It was a fulfilling and memorable introduction to Manila—rich in history, culture, and modern-day charm.
`,
      images: ["day 1 (4).jpg", "day 1 (5).jpg", "day 1 (3).JPG", "day 1 (7).jpg", "day 1.jpg" ]
    },
    {
      day: 2,
      title: "SBMA SITES",
      date: "April 08, 2025",
      description: `Our second day was a rich blend of learning and discovery as we visited the Subic Bay Metropolitan Authority (SBMA) for a series of official site visits. The day began with an informative briefing session that introduced us to the SBMA’s structure, operational goals, and its pivotal role in managing the Freeport Zone. We were given live demonstrations of their advanced systems, including real-time surveillance and command center operations, which offered us valuable insights into how technology and strategic oversight are seamlessly integrated to ensure the zone’s security, efficiency, and sustainability.

Following the presentations, we explored various key facilities within the SBMA area, where we had the opportunity to interact with personnel and observe their daily functions. Witnessing the coordination between departments and the practical application of administrative and technological systems brought a new level of understanding to port and zone management. The experience was further enriched by Subic’s stunning coastal views and the genuine hospitality of everyone we encountered. Beyond its educational value, the visit strengthened our group’s teamwork and left us with a greater appreciation for the intricacies of public service and economic zone administration.`,
      images: ["day 2 (2).jpg", "day 2 (3).jpg", "day 2 (4).jpg"]
    },
    // Add days 3-7 with similar structure
    {
      day: 3,
      title: "MUSEUM EXPLORATION",
      date: "April 09, 2025",
      description: `On Day 3, we explored the National Museum of Natural History in Manila, a stunning building highlighted by its iconic “Tree of Life” structure in the central atrium. The museum offered an impressive showcase of the Philippines’ diverse natural environment, featuring interactive exhibits on native flora and fauna, geological formations, and lifelike dioramas of forests, mountains, and marine ecosystems. What left the strongest impression was the museum’s focus on environmental conservation, emphasizing the importance of protecting the country's rich biodiversity through engaging storytelling and immersive displays.

In the afternoon, we visited Quezon Memorial Circle in Quezon City, a large urban park centered around the towering mausoleum of President Manuel L. Quezon. The peaceful setting, with its lush gardens and recreational spaces, offered a relaxing contrast to the morning’s museum visit. A highlight was the Presidential Car Museum, where we viewed historic vehicles used by past leaders, including President Quezon’s elegant black limousine. The collection provided a fascinating look into the nation’s political history and the legacy of its early leaders.`,
      images: [ "day 3 here.jpg", "day 3 (7).jpg", "day 3 (16).jpg", "day 3 (47).jpg", "day 3 (61).jpg", "day 3 (83).jpg", "day 3 (38).jpg", "day 3 (57).jpg", "day 3 (54).jpg", "day 3 (21).jpg" ]
    },
    {
      day: 4,
      title: "BANGKO CENTRAL AND HYTEC",
      date: "April 10, 2025",
      description: `During our visit to Bangko Sentral ng Pilipinas, we explored the fascinating process behind currency production—from design and security features to printing and quality control. Though photography wasn’t allowed, purchasing a commemorative coin made the experience memorable. We were impressed by the advanced technologies used to prevent counterfeiting and the cultural significance embedded in our currency, which gave us a newfound respect for the money we use every day and the institution that upholds its integrity.

At Hytec Power Inc. in Novaliches, we were introduced to a hub of innovation dedicated to bridging education and industry. Founded by Engr. Eric Jude S. Soliman in 1994, the company offers advanced training systems in automation, robotics, and Industry 4.0 technologies. Through hands-on demonstrations, we saw how Hytec Power helps equip students and professionals with practical skills, reflecting its strong commitment to developing a future-ready workforce.S`,
      images: ["hytec.jpg","day 4 (8).jpg","day 4 (1).jpg", "day 4 (2).jpg","day 4 (3).jpg","day 4 (4).jpg","day 4 (5).jpg","day 4 (6).jpg","day 4 (7).jpg", ]
    },
    {
      day: 5,
      title: "TRAFFIC ENGINEER CENTER AND LIGHT TRAIL",
      date: "April 11, 2025",
      description: `Day 5 provided an eye-opening glimpse into the complex systems that keep Metro Manila moving efficiently amidst the city’s fast-paced environment. Our day began at the Traffic Engineering Center, where we explored how traffic across the metropolis is monitored and managed in real time. We learned about the coordination of traffic signals, the integration of live traffic data, and the strategic planning that helps ease congestion and enhance road safety. It was impressive to see the level of technology and expertise involved in ensuring smoother and safer travel on such a massive urban scale.

In the afternoon, we delved into the operations of the LRT Line 2, gaining a deeper understanding of how Metro Manila’s public transport systems function behind the scenes. From train scheduling and infrastructure design to system maintenance and passenger flow management, we witnessed the intricate processes that support daily commuting for thousands of people. This experience broadened our perspective on urban mobility and underscored the importance of efficient transport systems in maintaining a functional, livable city. It also deepened our appreciation for the often-invisible efforts that keep public infrastructure running seamlessly.`,
      images: ["day 5 (2).jpg","day 5 (3).jpg","day 5 (4).jpg","day 5 (5).jpg","day 5 (6).jpg","day 5 (7).jpg","day 5 (8).jpg","day 5 (9).jpg", "day 5 (11).jpg", "day 5 (12).jpg",]
    },
    {
      day: 6,
      title: "BAGUIO TOUR",
      date: "April 12, 2025",
      description: `Our journey to Baguio, known as the Summer Capital of the Philippines, began with a warm welcome from its crisp mountain air and scenic views lined with tall pine trees. The city's cool climate and picturesque charm set the tone for a memorable adventure. One of our first stops was the famous Strawberry Farm, where we had the delightful experience of picking fresh, juicy strawberries straight from the vine. We then visited the serene and intricately designed Bell Church, a peaceful sanctuary that reflects rich cultural and spiritual influences.

Another highlight of the trip was The Mansion, the elegant official retreat house of the President of the Philippines. Its stately architecture and historical significance offered a glimpse into the country’s political heritage. We also explored the grounds of the renowned Philippine Military Academy, where we witnessed the discipline, commitment, and rigorous training that shape the future leaders of the nation’s armed forces.

Throughout the day, we were immersed in Baguio’s unique blend of history, culture, and natural beauty. It was a truly enjoyable and enlightening experience that left us with lasting memories and a deeper appreciation for this mountain city.`,
      images: [ "day 6 (2).jpg","day 6 (3).jpg","day 6 (4).jpg","day 6 (5).JPG","day 6 (6).JPG","day 6 (7).jpg","day 6 (8).jpg", "day 6 (9).jpg", "day 6 (10).jpg", "day 6 (11).jpg",]
    },
    {
      day: 7,
      title: "LAST MORNING IN BAGUIO",
      date: "April 13, 2025",
      description: `On the final day of our Baguio adventure, we made the most of our remaining time by visiting Burnham Park, one of the city’s most iconic and well-loved spots. The peaceful atmosphere and scenic surroundings made it the perfect place to unwind. Some of us enjoyed a laid-back bike ride around the park’s tree-lined paths, while others strolled leisurely, soaking in the fresh mountain breeze and serene views. The park’s charm provided a relaxing contrast to the busier parts of the trip.
`,
      images: ["day 7.jpg"]
    }
  ];

const BlogPage = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      (prev + 1) % tourData.find(day => day.day === activeDay).images.length
    );
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">7-Day Adventure Tour</h1>
      
      <div className="tabs-container">
        {Array.from({ length: 7 }, (_, i) => i + 1).map(day => (
          <button
            key={day}
            className={`tab-button ${activeDay === day ? 'active' : ''}`}
            onClick={() => {
              setActiveDay(day);
              setCurrentImageIndex(0);
            }}
          >
            Day {day}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {tourData.map((dayData) => (
          dayData.day === activeDay && (
            <motion.div
              key={dayData.day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="day-content"
            >
              <div className="day-header">
                <h2>{dayData.title}</h2>
                <div className="day-meta">
                  <span><FaCalendarAlt /> {dayData.date}</span>
                </div>
              </div>

              <div className="image-gallery">
                <div className="main-image-container">
                  <motion.img
                    key={currentImageIndex}
                    src={dayData.images[currentImageIndex]}
                    alt={`Day ${dayData.day} - ${currentImageIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="main-image"
                  />
                  {dayData.images.length > 1 && (
                    <button className="next-image-button" onClick={handleNextImage}>
                      <FaArrowRight />
                    </button>
                  )}
                </div>
                <div className="image-thumbnails">
                  {dayData.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>

              <p className="day-description">{dayData.description}</p>
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BlogPage;