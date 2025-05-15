import { toast } from "react-toastify";
import type { FormFields } from "./types";

interface FormFieldProps {
  field: FormFields;
  index: number;
  onUpdate: (index: number, updatedField: FormFields) => void;
  onRemove: (index: number) => void;
}

export default function FormField({
  field,
  index,
  onUpdate,
  onRemove,
}: FormFieldProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onUpdate(index, { ...field, value: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(index, {
      ...field,
      value: e.target.files
        ? Array.from(e.target.files)
            .map((file) => file.name)
            .join(", ")
        : "",
    });
  };

  return (
    <div className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
      <label className="block mb-2 text-lg font-medium text-gray-700">
        {field.label}
      </label>

      {field.type === "textarea" ? (
        <textarea
          value={field.value}
          onChange={handleChange}
          className="
        w-full p-2 border border-gray-300 rounded-lg focus:outline-none
        focus:ring-2 focus:ring-blue-400"
        />
      ) : field.type === "file" ? (
        <input
          type="file"
          onChange={handleFileChange}
          className="border w-full p-2
        border-gray-300 rounded-lg"
        />
      ) : (
        <input
          type={field.type}
          value={field.value === "file" ? "" : field.value}
          onChange={handleChange}
          className="
        w-full p-2 border border-gray-300 rounded-lg focus:outline-none
        focus:ring-2 focus:ring-blue-400"
        />
      )}
      <button
        className="btn btn-error mt-3"
        onClick={() => {
          onRemove(index);
          toast.success("Field Removed");
        }}
      >
        Remove Field
      </button>
    </div>
  );
}
