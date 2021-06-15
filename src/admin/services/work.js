const workService = {
    workToLoftSchoolWork(work){
        let loftSchoolWork = {
            id: work.id,
            title: work.title,
            techs: work.tags.join(', '),
            photo: work.image,
            link: work.link,
            description: work.description
        };
        return loftSchoolWork;
    },

    loftSchoolWorkTowork(loftSchoolWork){
        let work = {
            id: loftSchoolWork.id,
            title: loftSchoolWork.title,
            tags: loftSchoolWork.techs.replace(' ','').split(','),
            image: loftSchoolWork.photo,
            link: loftSchoolWork.link,
            description: loftSchoolWork.description
        };

        return work;
    }
};

export default workService;