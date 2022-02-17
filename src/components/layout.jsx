export const Layout = ({children}) => {
    return(
        <section>
            <header>
                Menu
            </header>
            <main className="container">{children}</main>
            <footer>
                Rodapé
            </footer>
        </section>
    )
}
// children é o listTutors