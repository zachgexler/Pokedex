!<DOCTYPE html >
    <html>
        <head>
            <meta charset="utf-8" />
            <title>Create a new Pokemon</title>
        </head>
        <body>
            <h1>New Pokemon page</h1>

            <form action="/pokemon" method="POST">
                Name: <input type="text" name="name" value="<a%pokemon.name%>" /><br />
                ID: <input type="text" name="color" value="<a%pokemon.id%>" /><br />
                IMG: <input type="text" name="img" value="<a%pokemon.img%>" /><br />
                Type: <input type="text" name="type" value="<a%pokemon.type%>" /><br />
                Attack: <input type="text" name="attack" value="<a%pokemon.attack%>" /><br />
                Defense: <input type="text" name="defense" /><br />
                <input type="submit" value="Create Pokemon" />
            </form>
        </body>
    </html>