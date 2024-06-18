import "./styles.css"


interface IChildren {
    children: React.ReactNode
}

export function Card({children}:IChildren){


    return(
        <div className="card">
            {children}
        </div>

    )
}