import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (    
      <div className="accordion-item">
        <div className="accordion-header"
        onClick={toggleAccordion}
        >
          <span>{title}</span>
        </div>
        {isOpen && (
          <div
            className="accordion-content"
            style={{ display: 'block'}}
          >
            {content}
          </div>
        )}
      </div>
    );
  };

  export default AccordionItem
  