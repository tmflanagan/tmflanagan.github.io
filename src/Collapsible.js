import React, {useState, useEffect, useRef} from 'react';
import './chevrons.css'

interface IProps {
  open?: boolean;
  title: string;
}

const Collapsible: React.FC<IProps> = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);
  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(open ? ref.current?.getBoundingClientRect().height : 0);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  return (
    <>
      <div className="card" style={{height}}>
        <div class="collapsible-title" onClick={handleFilterOpening}>
            <h1 className="font-weight-bold">{title}</h1>
            {isOpen && <i class="chevron-bottom"/>}
            {!isOpen && <i class="chevron-top"/>}
        </div>

        <div className="border-bottom collapser">
          {isOpen && <div>{children}</div>}
        </div>
      </div>
    </>
  );
};

export default Collapsible;
