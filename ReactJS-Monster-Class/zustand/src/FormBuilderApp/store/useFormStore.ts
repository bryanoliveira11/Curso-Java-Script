import { create } from "zustand";
import type { FormStoreState } from "../types";

export const useFormStore = create<FormStoreState>((set) => ({
  formFields: [],
  addField: (field) =>
    set((state) => ({ formFields: [...state.formFields, field] })),
  removeField: (index) =>
    set((state) => ({
      formFields: state.formFields.filter(
        (_, fieldIndex) => fieldIndex !== index
      ),
    })),
  updateField: (index, updatedField) =>
    set((state) => ({
      formFields: state.formFields.map((field, fieldIndex) =>
        fieldIndex === index ? updatedField : field
      ),
    })),
  resetForm: () => set({ formFields: [] }),
}));
