import BaseDialog from "@/components/ui/BaseDialog/BaseDialog";
import { useCreateCar } from "../../hooks/useCreateCar";
import NewCarForm from "../NewCarForm/NewCarForm";
import { Car } from "../../car.types";

type AddCarDialogProps = {
  open: boolean;
  onClose: () => void;
  onCarAdded: () => void;
};

const AddCarDialog = ({ open, onClose, onCarAdded }: AddCarDialogProps) => {
  const { addCar } = useCreateCar();

  const handleAddCar = async (formData: Omit<Car, "id">) => {
    await addCar(formData);
    onClose();
    onCarAdded();
  };

  return (
    <BaseDialog open={open} onClose={onClose} title="Add a New Car">
      <NewCarForm onSubmit={handleAddCar} onCancel={onClose} />
    </BaseDialog>
  );
};

export default AddCarDialog;
