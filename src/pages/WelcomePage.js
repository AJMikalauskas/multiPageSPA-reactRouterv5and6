import { Route } from "react-router-dom";

const WelcomePage = () =>
{
    return( 
    <section>
        <h1>The Welcome Page!</h1> 
        {/* 
        If welcomepage is active, this route will be evaluated and if not active, route
        not evaluated. This is a nested route but at the same time deals with the problem 
        of showing both welcomepage text and welcome new user! text. 
        Only seen if at path of "/welcome/new-user"
         */}
        <Route path="/welcome/new-user">
            <p>Welcome, new user!</p>
        </Route>
    </section>
    )

};

export default WelcomePage;