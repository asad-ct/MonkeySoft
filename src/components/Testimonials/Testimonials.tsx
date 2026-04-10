'use client';

import { Star } from 'lucide-react';
import styles from './testimonials.module.css';

interface Testimonial {
  id: number;
  quote: string;
  clientName: string;
  clientTitle: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Meily's strategic approach to design brought our brand vision to life. The packaging and brand elements she developed elevated our aesthetic and aligned perfectly with our sustainability values.",
    clientName: 'June Lee',
    clientTitle: 'CEO of GreenRoots',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    id: 2,
    quote: "Meily's strategic approach to design brought our brand vision to life. The packaging and brand elements she developed elevated our aesthetic and aligned perfectly with our sustainability values.",
    clientName: 'Jona Carter',
    clientTitle: 'Founder of EcoLux',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  {
    id: 3,
    quote: "Every project Meily touches turns into a perfect blend of design and purpose. She crafted packaging that reflected our eco-friendly mission while making our products stand out on the shelves.",
    clientName: 'Sofia Toms',
    clientTitle: 'Founder at GreenK Studios',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  },
  {
    id: 4,
    quote: "Meily's designs speak for themselves — bold, strategic, and impactful. She took the time to understand our brand, delivering packaging concepts that resonated with our target audience and boosted our product's visibility.",
    clientName: 'Michael Brooks',
    clientTitle: 'Brand Director at UrbanFit',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
  },
  {
    id: 5,
    quote: "Meily's strategic approach to design brought our brand vision to life. The packaging and brand elements she developed elevated our aesthetic and aligned perfectly with our sustainability values.",
    clientName: 'Jona Carter',
    clientTitle: 'Founder of EcoLux',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  {
    id: 6,
    quote: "Every project Meily touches turns into a perfect blend of design and purpose. She crafted packaging that reflected our eco-friendly mission while making our products stand out on the shelves.",
    clientName: 'Sofia Toms',
    clientTitle: 'Founder at GreenK Studios',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  },
  {
    id: 7,
    quote: "Meily's designs speak for themselves — bold, strategic, and impactful. She took the time to understand our brand, delivering packaging concepts that resonated with our target audience and boosted our product's visibility.",
    clientName: 'Michael Brooks',
    clientTitle: 'Brand Director at UrbanFit',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
  }
];

export const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <div className={styles.header}>
            <div className={styles.badge}>
              <span>◎ Client Reviews</span>
            </div>
            <h2 className={styles.title}>
              What Our <span className={styles.subtitle}>Clients Say</span>
            </h2>
          </div>
        </div>

        <div className={styles.carousel}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              {/* <div className={styles.imageContainer}>
                <img
                  src={testimonial.image}
                  alt={testimonial.clientName}
                  className={styles.clientImage}
                />
              </div> */}

              <div className={styles.clientSection}>
                <p className={styles.clientName}>{testimonial.clientName}</p>
                <p className={styles.clientTitle}>{testimonial.clientTitle}</p>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.quoteSection}>
                <p className={styles.quote}>{testimonial.quote}</p>
              </div>

              <div className={styles.ratingSection}>
                <span className={styles.ratingText}>{testimonial.rating.toFixed(1)}</span>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      width={20}
                      height={20}
                      fill="rgb(255, 215, 0)"
                      className={styles.star}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
