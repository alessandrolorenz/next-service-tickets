import React, { useState, ReactNode } from 'react';

interface AccordionBasicExampleProps {
    children: ReactNode;
}

const AccordionBasicExample = ({ children }: AccordionBasicExampleProps): JSX.Element => {
    const [activeElement, setActiveElement] = useState<string | null>(null);

    const handleClick = (id: string) => {
        if (id === activeElement) {
            setActiveElement(null);
        } else {
            setActiveElement(id);
        }
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