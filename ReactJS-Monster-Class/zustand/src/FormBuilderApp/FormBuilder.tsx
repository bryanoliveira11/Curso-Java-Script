import React, { type ChangeEvent } from "react";
import { useFormStore } from "./store/useFormStore";
import type { FormFields } from "./types";
import { ToastContainer, toast } from "react-toastify";
import FormField from "./FormField";

export default function FormBuilder() {
  const { formFields, addField, removeField, updateField, resetForm } =
    useFormStore();

  const [newField, setNewField] = React.useState<FormFields>({
    label: "",
    type: "text",
    value: "",
  });

  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewField((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddField = () => {
    if (newField.label.trim() === "") {
      toast.error("Label for Field is Empty");
      return;
    }
    addField(newField);
    setNewField({ label: "", type: "text", value: "" });
    toast.success("New Field Added");
  };

  const handleFieldUpdate = (index: number, updatedField: FormFields) => {
    updateField(index, updatedField);
  };

  const handleFieldRemove = (index: number) => removeField(index);

  const handleResetForm = () => {
    resetForm();
    toast.info("Reset Successful");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg text-neutral
      w-[64rem]"
      >
        <ToastContainer />
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-400">
          Form Builder
        </h1>
        <div className="flex flex-col mb-6">
          <input
            type="text"
            name="label"
            placeholder="Field Label"
            value={newField.label}
            className="p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none
        focus:ring-2 focus:ring-blue-400"
            onChange={handleFieldChange}
          />
          <select
            name="type"
            value={newField.type}
            className="p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none
        focus:ring-2 focus:ring-blue-400"
            onChange={handleFieldChange}
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="textarea">Textarea</option>
            <option value="date">Date</option>
            <option value="file">File</option>
          </select>

          <div className="flex justify-between mt-4">
            <button className="btn btn-info" onClick={handleAddField}>
              Add Field
            </button>

            <button className="btn btn-warning" onClick={handleResetForm}>
              Reset Form
            </button>
          </div>
        </div>

        <form>
          {formFields.map((field, index) => (
            <FormField
              key={index}
              index={index}
              field={field}
              onUpdate={handleFieldUpdate}
              onRemove={handleFieldRemove}
            />
          ))}
        </form>
      </div>
    </div>
  );
}
