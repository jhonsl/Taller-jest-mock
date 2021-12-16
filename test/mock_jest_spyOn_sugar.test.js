import * as app from "./app";
import * as math from "./math";

test("calls math.add", () => {

  const originalAdd = math.add;
  math.add = jest.fn(originalAdd);

  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);

  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  expect(math.add).toHaveBeenCalledWith(1, 2);

  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});