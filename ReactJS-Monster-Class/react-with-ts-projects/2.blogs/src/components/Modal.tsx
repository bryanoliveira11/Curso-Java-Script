import { RiCloseCircleLine } from "react-icons/ri";

const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black backdrop-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow relative">
        <div className="mt-5">{children}</div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 cursor-pointer"
        >
          <RiCloseCircleLine className="text-black" size={25}/>
        </button>
      </div>
    </div>
  );
};

export default Modal;
