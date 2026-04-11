
export default function TrailerModal({
    title,
    onClose,
}: {
    title: string;
    onClose: () => void;
}) {
    const query = encodeURIComponent(title + " trailer");

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">

            {/* CLOSE BUTTON */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white text-2xl"
            >
                ✖
            </button>

            {/* YOUTUBE IFRAME */}
            <iframe
                className="w-[90%] md:w-[70%] h-[50%] md:h-[70%] rounded-lg"
                src={`https://www.youtube.com/embed?listType=search&list=${query}`}
                allowFullScreen
            />
        </div>
    );
}