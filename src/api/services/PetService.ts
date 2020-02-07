import { Service } from 'typedi';
import uuid from 'uuid';
// import { EventDispatcher, EventDispatcherInterface } from '../../decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Pet } from '../models/Pet';
import { User } from '../models/User';
// import { events } from '../subscribers/events';
@Service()
export class PetService {
    constructor(
        // @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
        @Logger(__filename) private log: LoggerInterface
    ) { }
    public find(): Promise<Pet[]> {
        this.log.info('Find all pets');
        // return this.petRepository.find();
        return new Promise((res) =>  res([new Pet()]));
    }
    public findByUser(user: User): Promise<Pet[]> {
        this.log.info('Find all pets of the user', user.toString());
        // return this.petRepository.find({
        //     where: {
        //         userId: user.id,
        //     },
        // });
        return new Promise((res) =>  res([new Pet()]));
    }
    public findOne(id: string): Promise<Pet | undefined> {
        this.log.info('Find all pets');
        // return this.petRepository.findOne({ id });
        return undefined;
    }
    public async create(pet: Pet): Promise<Pet> {
        this.log.info('Create a new pet => ', pet.toString());
        pet.id = uuid.v1();
        // const newPet = await this.petRepository.save(pet);
        // this.eventDispatcher.dispatch(events.pet.created, newPet);
        return new Promise((res) =>  res(new Pet()));
    }
    public update(id: string, pet: Pet): Promise<Pet> {
        this.log.info('Update a pet');
        pet.id = id;
        // return this.petRepository.save(pet);
        return new Promise((res) =>  res(new Pet()));
    }
    public async delete(id: string): Promise<void> {
        this.log.info('Delete a pet');
        // await this.petRepository.delete(id);
        return;
    }
}