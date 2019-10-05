import storage from '../../bin/storage';
import GoogleDrive from "../../bin/storage/google-drive/google-drive";

test('Storage is initiated properly', () => {
   const gDrive = new storage('google-drive').get();
   expect(gDrive).toBeInstanceOf(GoogleDrive);
});