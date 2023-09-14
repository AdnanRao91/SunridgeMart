

function AccordionItem({ title, content, isOpen, onClick, selectedData, onItemSelected }) {
    const handleItemClick = (item) => {
        // Call the callback function to update selectedData in the parent component
        onItemSelected(item);
    };

    return (
        <div className="border border-gray-300 rounded mb-2 ">
            <button
                className="w-full py-2 px-4 flex items-center justify-between bg-white"
                onClick={onClick}
            >
                <span className="f-16 nova-bold">{title}</span>
                <svg
                    className={`w-6 h-6 stroke-black transition-transform transform ${isOpen ? 'rotate-0' : '-rotate-180'
                        }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M7.41 6.58L12 11.17l4.59-4.59L18 7l-6 6-6-6 1.41-1.42z"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 bg-gray-100 transition duration-1000">
                    {/* Render the content with selectable items */}
                    {content}
                </div>
            )}
        </div>
    );
}

export default AccordionItem