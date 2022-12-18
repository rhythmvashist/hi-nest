import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';


describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("Get All",()=>{
    it('should return a list',()=>{
      const result = service.getAll()
      expect(result).toBeInstanceOf(Array)

    })
  })

  describe("Get One",()=>{
    it('should return a Movie',()=>{
      service.create({
        title:'Fake title',
        genres:"Thriller",
        year:2022
      })
      const result = service.getOne(1)
      expect(result).toBeDefined()
      expect(result.id).toEqual(1)
    })


    it('should throw 404',()=>{
      try {
        service.getOne(999)
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException)
      }
    })
  })
  
});
