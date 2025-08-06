import { useState } from "react";
import { Grid as MUIGrid, TextField as MUITextField } from "@mui/material";
import BaseButton from "@/components/ui/BaseButton/BaseButton";
import SelectDropdown from "@/components/ui/SelectDropdown/SelectDropdown";
import { Car } from "../../car.types";
import { carFormFields } from "../../constants/carFormFields";

const initialCarFormData: Omit<Car, "id"> = {
  make: "",
  model: "",
  year: new Date().getFullYear(),
  color: "",
  mobile: "",
  tablet: "",
  desktop: "",
};

type NewCarFormProps = {
  onSubmit: (data: Omit<Car, "id">) => void;
  onCancel: () => void;
};

const NewCarForm = ({ onSubmit, onCancel }: NewCarFormProps) => {
  const [formData, setFormData] = useState<Omit<Car, "id">>(initialCarFormData);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleTextChange =
    (key: keyof Omit<Car, "id">) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSelectChange =
    (key: keyof Omit<Car, "id">) => (value: string | number) => {
      setFormData((prev) => ({ ...prev, [key]: value }));
    };
  const handleBlur = (key: keyof Omit<Car, "id">) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const getError = (key: keyof Omit<Car, "id">) => {
    const field = carFormFields.find((f) => f.name === key);
    if (!field?.required) return "";
    if (!formData[key]) return "This field is required.";
    return "";
  };

  const isFormValid = carFormFields.every((field) => {
    if (!field.required) return true;
    return Boolean(formData[field.name]);
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <MUIGrid container spacing={2}>
        {carFormFields.map((field) => (
          <MUIGrid size={{ xs: 12, sm: 6 }} key={field.name}>
            {field.type === "select" ? (
              <SelectDropdown
                label={field.label}
                options={field.options!.map((opt) => ({
                  label: opt.toString(),
                  value: opt,
                }))}
                value={formData[field.name]}
                onChange={handleSelectChange(field.name)}
                onBlur={() => handleBlur(field.name)}
                fullWidth
              />
            ) : (
              <MUITextField
                label={field.label}
                value={formData[field.name] as string}
                onChange={handleTextChange(field.name)}
                onBlur={() => handleBlur(field.name)}
                fullWidth
                error={touched[field.name] && !!getError(field.name)}
                helperText={touched[field.name] && getError(field.name)}
              />
            )}
          </MUIGrid>
        ))}

        <MUIGrid
          size={{ xs: 12 }}
          display="flex"
          justifyContent="flex-end"
          gap={2}
        >
          <BaseButton variant="outlined" onClick={onCancel}>
            Cancel
          </BaseButton>
          <BaseButton variant="contained" type="submit" disabled={!isFormValid}>
            Add Car
          </BaseButton>
        </MUIGrid>
      </MUIGrid>
    </form>
  );
};

export default NewCarForm;
