const KarinaPerfil = () => {
    //DATOS PERSONALES 
    const nameUser: string = "Karina"
    const jobs: string[] = ["Graphic designer", "Architect", "Maintenance engineer", "English teacher"]
    const hobbies: string[] = ["Crossfit", "Caminar en la montaña", "Ir al teatro", "Visitar museos", "Ver podcasts"]
    const info: string = "Im a English teacher and an aspiring web-app developer";
    const isActive: boolean = true


    return (
        <>
            <div className='card-profile'>
                <h2 className='name'>{nameUser}</h2>
                <img src="https://media.tenor.com/dOBztC8Y7p8AAAAi/black-cat.gif" alt="gatito" />
                <h3>Jobs</h3>
                <p className='jobs'>{jobs.join(',')}</p>
                <h3>Hobbies</h3>
                <p className='hobbies'>{hobbies.join(',')}</p>

                <p className="info">{info}</p>
                {isActive ? <span className='tag-state'>Online</span> : null}
            </div>
        </>




    )

}
export default KarinaPerfil