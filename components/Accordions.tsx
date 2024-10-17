import React, { useState, ReactNode, useEffect } from 'react';

interface AccordionBasicExampleProps {
    children: ReactNode;
    defaultOpenId?: string; // Adiciona a prop para o ID do elemento aberto por padrão
}

const AccordionBasicExample = ({ children, defaultOpenId }: AccordionBasicExampleProps): JSX.Element => {
    const [activeElement, setActiveElement] = useState<string[]>(defaultOpenId ? [defaultOpenId] : []);

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