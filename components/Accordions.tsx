import React, { useState, ReactNode } from 'react';

interface AccordionBasicExampleProps {
    children: ReactNode;
}

const AccordionBasicExample = ({ children }: AccordionBasicExampleProps): JSX.Element => {
    const [activeElement, setActiveElement] = useState<string[]>([]);

    const handleClick = (id: string) => {
        setActiveElement((prevActiveElements) => {
            if (prevActiveElements.includes(id)) {
                return prevActiveElements.filter((elementId) => elementId !== id);
            } else {
                return [...prevActiveElements, id];
            }
        });
    };

    return (
        <div id="accordionExample" className="mt-10 mb-10">
            {React.Children.map(children, (child: any) =>
                React.cloneElement(child, {
                    activeElement,
                    handleClick,
                })
            )}
        </div>
    );
};

export default AccordionBasicExample;