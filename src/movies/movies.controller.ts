import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService:MoviesService){}
    @Get()
    getAllMovies():Movie[]{
        return this.moviesService.getAll();
    }

    // @Get('search')
    // search(@Query("year") searchingYear:string){
    //     return `we are searching for a movie with  a year ${searchingYear}`
    // }

    @Get("/:id")
    getOne(@Param("id")id:number):Movie{
        return this.moviesService.getOne(id)
    }

    @Post()
    create(@Body() movieData:CreateMovieDTO){
        return this.moviesService.create(movieData)
    }

    @Delete('/:id')
    deletemovie(@Param("id") movieiD:number){
        return this.moviesService.deleteOne(movieiD)

    }

    @Patch('/:id')
    patchMovie(@Param('id')movieId:number,@Body() updatedData:UpdateMovieDTO){
        return this.moviesService.update(movieId,updatedData)
    }

   

}   
