import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TitleBack from '@/assets/images/title/head--title.png';
gsap.registerPlugin(ScrollTrigger);

const HeadTitle = ({title, soft, description, className, hasBack }) => {
  const container = useRef();
  const titleRef = useRef();

  useGSAP(() => {
    if (title && titleRef.current) {
      if (container.current.classList.contains('auth--title')) return;
      const text = titleRef.current;
      const originalContent = text.textContent || '';
      text.innerHTML = '';
      originalContent.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter === ' ' ? '\u00A0' : letter;
        span.style.display = 'inline-block';
        text.appendChild(span);
        gsap.from(span, {
          y: 20,
          opacity: 0,
          rotate: 10,
          duration: 0.5,
          delay: index * 0.07,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: container.current,
            start: 'top bottom-=20%',
            toggleActions: "play none none reverse",
          }
        });
      });
    }

    gsap.from(container.current, {
      yPercent: -10,
      opacity: 0,
      rotate: 0,
      duration: 1,
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom-=20%',
        toggleActions: "play none none reverse",
      }
    });

  }, { scope: container, dependencies: [title] });

  return (
    <div ref={container} className={`head--title ${className}`}>
      {soft && (
        <h3 className='head--title-soft base-text'>
          {soft}
        </h3>
      )}
      <div className="head--title-wrap">
        {title && (
          <h2 ref={titleRef} className='title-text'>
            {title}
          </h2>
        )}
        {description && (
          <p className='base-text'>{description}</p>
        )}
      </div>
    </div>
  )
}

export default HeadTitle;