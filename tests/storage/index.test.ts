import { unistorage } from '../../index';
import GoogleDrive from "../../bin/storage/google-drive/google-drive";

test('Storage is initiated properly', () => {
   const gDrive = unistorage('google-drive');
   expect(gDrive).toBeInstanceOf(GoogleDrive);
});