class BaseRepository{

    constructor(model){
        this.model = model;
    }

    async get(id){
        return await this.model.findById(id);
    }

    async getAll(pageSize = 5, pageNumber = 0){
        const skips = pageSize * pageNumber;
        return await this.model
                        .find()
                        .skip(skips)
                        .limit(pageSize)
                        .sort('createdAt');
    }

    async create(entity){
        return await this.model.create(entity);
    }

    async update(id, entity){
        return await this.model.findByIdAndUpdate(id, entity,  { new: true });
    }

    async delete(id){
        await this.model.findByIdAndDelete(id);
        return true;
    }

}

module.exports = BaseRepository;
