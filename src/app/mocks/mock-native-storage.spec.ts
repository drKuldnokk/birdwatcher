import { MockNativeStorage } from './mock-native-storage';

describe('MockNativeStorage', () => {

  let mockNativeStorage: MockNativeStorage;

  beforeEach(async() => {
    mockNativeStorage = new MockNativeStorage();
  })

  it('should return promise when item set', (done) => {
    mockNativeStorage.setItem("some key", "some value")
      .then(
        () => {
          expect(true).toBeTruthy();
          done();
        }
      )
  });

  it('should return item by key after item is saved', (done) => {
    mockNativeStorage.setItem("some key", "some value")
      .then(
        () => {
          mockNativeStorage.getItem("some key")
            .then(
              (data) => {
                expect(data).toEqual("some value");
                done();
              }
            );
        }
      );
  });

  it('should have no elements after initialization', (done) => {
    mockNativeStorage.keys()
      .then(
        (arrayOfKeys) => {
          expect(arrayOfKeys.length).toEqual(0);
          done();
        }
      )
  });

  it('should contain element after it is added', (done) => {
    mockNativeStorage.setItem("some key", "some value")
      .then(
        () => {
          expect(mockNativeStorage.data.has("some key")).toBeTruthy();
          done();
        });
  });
});
