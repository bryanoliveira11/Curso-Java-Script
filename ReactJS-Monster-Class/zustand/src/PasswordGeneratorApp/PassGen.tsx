import { usePassGenStore } from "./store/usePassGenStore";
import { ToastContainer, toast } from "react-toastify";

export default function PassGen() {
  const {
    length,
    includeNumbers,
    includeSymbols,
    includeUppercase,
    includeLowercase,
    generatedPassword,
    setLength,
    toggleNumbers,
    toggleSymbols,
    toggleUppercase,
    toggleLowercase,
    generatePassword,
  } = usePassGenStore();

  const handleGeneratePassword = () => {
    if (
      ![
        includeNumbers,
        includeSymbols,
        includeUppercase,
        includeLowercase,
      ].some(Boolean)
    ) {
      toast.error("Check a box to generate a password");
      return;
    }
    generatePassword();
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-slate-400 to-slate-600
    flex items-center justify-center"
    >
      <ToastContainer />
      <div className="p-8 w-[40rem] mx-auto bg-white shadow-lg rounded-lg text-neutral">
        <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="length"
              className="block text-sm font-medium text-gray-700"
            >
              Password Length
              <input
                type="number"
                value={length}
                placeholder="Password Length"
                min={4}
                max={64}
                className="mt-1 block w-full px-3 py-2 border border-gray-300
                rounded-md shadow-sm focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500"
                onChange={(e) => setLength(Number(e.target.value))}
              />
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={includeNumbers}
              onChange={toggleNumbers}
            />
            <label className="ml-2 text-sm">Include Numbers</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={includeSymbols}
              onChange={toggleSymbols}
            />
            <label className="ml-2 text-sm">Include Symbols</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={includeUppercase}
              onChange={toggleUppercase}
            />
            <label className="ml-2 text-sm">Include Uppercase</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={includeLowercase}
              onChange={toggleLowercase}
            />
            <label className="ml-2 text-sm">Include Lowercase</label>
          </div>
        </div>
        <button
          className="btn btn-primary mt-4"
          onClick={handleGeneratePassword}
        >
          Generate Password
        </button>

        {generatedPassword && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="text-lg break-all">{generatedPassword}</p>
          </div>
        )}
      </div>
    </div>
  );
}
