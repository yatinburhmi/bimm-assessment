import { graphql, HttpResponse } from "msw";
import { v4 as uuidv4 } from "uuid";

const carList = [
  {
    id: "1",
    make: "Audi",
    model: "Q5",
    year: 2023,
    color: "Blue",
    mobile:
      "https://media.audi.com/is/image/audi/nemo/uk/models/q5-tfsi-e/2023-trims/mobile/q5_sportback_tfsie_sport_1280x1080px.png?width=300",
    tablet:
      "https://media.audi.com/is/image/audi/nemo/uk/models/q5-tfsi-e/2023-trims/mobile/q5_sportback_tfsie_sport_1280x1080px.png?width=900",
    desktop:
      "https://media.audi.com/is/image/audi/nemo/uk/models/q5-tfsi-e/2023-trims/mobile/q5_sportback_tfsie_sport_1280x1080px.png?width=1280",
  },
  {
    id: "2",
    make: "Audi",
    model: "A3",
    year: 2022,
    color: "Red",
    mobile:
      "https://nar.media.audi.com/is/image/audinar/nemo/ca/Models/a3/MY25/1920x1920-A3-P1.jpg?width=300",
    tablet:
      "https://nar.media.audi.com/is/image/audinar/nemo/ca/Models/a3/MY25/1920x1920-A3-P1.jpg?width=900",
    desktop:
      "https://nar.media.audi.com/is/image/audinar/nemo/ca/Models/a3/MY25/1920x1920-A3-P1.jpg?width=1200",
  },
  {
    id: "3",
    make: "Audi",
    model: "R8",
    year: 2024,
    color: "White",
    mobile:
      "https://www.intotheblue.co.uk/images/Suppliers/6thGear/6th-Gear-Experience---Audi-Thrill-2024/r8-white-600X600-1.jpg?width=300",
    tablet:
      "https://www.intotheblue.co.uk/images/Suppliers/6thGear/6th-Gear-Experience---Audi-Thrill-2024/r8-white-600X600-1.jpg?width=900",
    desktop:
      "https://www.intotheblue.co.uk/images/Suppliers/6thGear/6th-Gear-Experience---Audi-Thrill-2024/r8-white-600X600-1.jpg?width=1200",
  },
];

export const handlers = [
  graphql.query("GetCars", () => {
    return HttpResponse.json({ data: { cars: carList } });
  }),
  graphql.mutation("CreateCar", async ({ variables }) => {
    const newCar = {
      id: uuidv4(),
      ...variables.input,
    };
    carList.push(newCar);
    return HttpResponse.json({
      data: {
        createCar: newCar,
      },
    });
  }),
  graphql.query("GetFilterdCars", ({ variables }) => {
    const { make, model, year, color } = variables;
    let result = [...carList];
    if (make) {
      result = result.filter((car) =>
        car.make.toLowerCase().includes(make.trim().toLowerCase())
      );
    }

    if (model) {
      result = result.filter((car) =>
        car.model.toLowerCase().includes(model.trim().toLowerCase())
      );
    }

    if (year) {
      result = result.filter((car) => car.year === year);
    }

    if (color) {
      result = result.filter((car) =>
        car.color.toLowerCase().includes(color.trim().toLowerCase())
      );
    }

    return HttpResponse.json({
      data: {
        cars: result,
      },
    });
  }),
];
