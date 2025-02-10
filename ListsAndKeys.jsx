

const langs = ["HTML","CSS","JS"];

const ListsAndKeys = () =>{
    return(
        <>
        {
        langs.map((l,index) =>{
            return <li key = "index">{l}</li>
        })
        }
        </>
    );
}

export default ListsAndKeys;