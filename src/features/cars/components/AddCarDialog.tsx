import BaseDialog from "@/components/ui/BaseDialog/BaseDialog";
import NewCarForm from "./NewCarForm";
import { Car } from "../car.types";
import { useCreateCar } from "../hooks/useCreateCar";

type AddCarDialogProps = {
  open: boolean;
  onClose: () => void;
};

const AddCarDialog = ({ open, onClose }: AddCarDialogProps) => {
  const { addCar } = useCreateCar();

  const handleAddCar = async (formData: Omit<Car, "id">) => {
    const createdCar = await addCar(formData);
    console.log("Created car:", createdCar);
    onClose();
  };

  return (
    <BaseDialog open={open} onClose={onClose} title="Add a New Car">
      <NewCarForm onSubmit={handleAddCar} onCancel={onClose} />
    </BaseDialog>
  );
};

export default AddCarDialog;
