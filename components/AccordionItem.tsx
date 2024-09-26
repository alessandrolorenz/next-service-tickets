import React, { ReactNode } from 'react';

interface AccordionItemProps {
    id: string;
    title: string;
    content?: string;
    children?: ReactNode;
    activeElement: string | null;
    handleClick: (id: string) => void;
    isFirstChild?: boolean;
    isLastChild?: boolean;
}

const AccordionItem = ({ id, title, content, children, activeElement, handleClick, isFirstChild, isLastChild }: AccordionItemProps): JSX.Element => {
    const isActive = activeElement?.includes(id) ?? false;

    return (
        <div key={id} className={` ${isFirstChild ? 'rounded-t' : ''} ${isLastChild ? 'rounded-b' : ''}  border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800`}>
            <h2 className="mb-0" id={`heading${id}`}>
                <button
                    className={`${
                        isActive &&
                        `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                    } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                    type="button"
                    onClick={() => handleClick(id)}
                    aria-expanded={isActive}
                    aria-controls={`collapse${id}`}
                >
                    {title}
                    <span
                        className={`${
                            isActive
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                        } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                    >
                        ▼
                    </span>
                </button>
            </h2>
            <div
                id={`collapse${id}`}
                className={`${isActive ? 'block' : 'hidden'}`}
                aria-labelledby={`heading${id}`}
                data-bs-parent="#accordionExample"
            >
                <div className="px-5 py-4">
                    {children || content}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;