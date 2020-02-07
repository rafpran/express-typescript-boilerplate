import { Container } from 'typedi';
import { Pet } from '../../src/api/models/Pet';
import { PetService } from '../../src/api/services/PetService';
import { configureLogger } from '../utils/logger';
describe('PetService', () => {
    beforeAll(async () => {
        configureLogger();
    });
    test('should create a new pet in the database', async (done) => {
        const pet = new Pet();
        pet.id = 'xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx';
        pet.name = 'test';
        pet.age = 1;
        const service = Container.get<PetService>(PetService);
        const resultCreate = await service.create(pet);
        expect(resultCreate.name).toBe(pet.name);
        expect(resultCreate.age).toBe(pet.age);
        const resultFind = await service.findOne(resultCreate.id);
        if (resultFind) {
            expect(resultFind.name).toBe(pet.name);
            expect(resultFind.age).toBe(pet.age);
        } else {
            fail('Could not find pet');
        }
        done();
    });
});