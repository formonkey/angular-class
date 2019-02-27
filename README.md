# Run application

Enter in `client` and run:

````
npm i && ng server
````

And enter in http://localhost:4200

# Server REST

Enter in `server/rest` and run:

````
npm i && npm run server
````

Resources
http://localhost:9001/posts
http://localhost:9001/comments
http://localhost:9001/profile

Home
http://localhost:9001/

# Server GraphQL

Enter in `server/grapql` and run:

````
npm i && npm run server
````

And enter in http://localhost:9002

## GraphQL Usage

Here is how you can use the queries and mutations generated for your data, using `Post` as an example:

<table>
    <tr>
        <th>Query / Mutation</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>
            <pre>
// get a single entity, by id
{
  Post(id: 1) {
    id
    title
    views
    user_id
  }
}
            </pre>
        </td>
        <td>
            <pre>
{
  "data": {
    "Post": {
        "id": 1,
        "title": "Lorem Ipsum",
        "views": 254,
        "user_id": 123
    } 
  }
}
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            <pre>
// include many-to-one relationships
{
  Post(id: 1) {
    title
    User {
        name
    }
  }
}
            </pre>
        </td>
        <td>
            <pre>
{
  "data": {
    "Post": {
        "title": "Lorem Ipsum",
        "User": {
            "name": "John Doe"
        }
    } 
  }
}
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            <pre>
// include one-to-many relationships
{
  Post(id: 1) {
    title
    Comments {
        body
    }
  }
}
            </pre>
        </td>
        <td>
            <pre>
{
  "data": {
    "Post": {
        "title": "Lorem Ipsum",
        "Comments": [
            { "body": "Consectetur adipiscing elit" },
            { "body": "Nam molestie pellentesque dui" },
        ]
    } 
  }
}
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            <pre>
// get a list of entities for a type
{
  allPosts {
    title
    views
  }
}
            </pre>
        </td>
        <td>
            <pre>
{
  "data": {
    "allPosts": [
      { "title": "Lorem Ipsum", views: 254 },
      { "title": "Sic Dolor amet", views: 65 }
    ]
  }
}
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            <pre>
// paginate the results
{
  allPosts(page: 0, perPage: 1) {
    title
    views
  }
}
            </pre>
        </td>
        <td>
            <pre>
{
  "data": {
    "allPosts": [
      { "title": "Lorem Ipsum", views: 254 },
    ]
  }
}
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            <pre>
// sort the results by field
{
  allPosts(sortField: "title", sortOrder: "desc") {
    title
    views
  }
}
            </pre>
        </td>
        <td>
            <pre>
{
  "data": {
    "allPosts": [
      { "title": "Sic Dolor amet", views: 65 }
      { "title": "Lorem Ipsum", views: 254 },
    ]
  }
}
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            <pre>
// filter the results using the full-text filter
{
  allPosts({ filter: { q: "lorem" }}) {
    title
    views
  }
}
            </pre>
        </td>
        <td>
            <pre>
{
  "data": {
    "allPosts": [
      { "title": "Lorem Ipsum", views: 254 },
    ]
  }
}
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            <pre>
// filter the result using any of the entity fields
{
  allPosts({ filter: { views: 254 }}) {
    title
    views
  }
}
            </pre>
        </td>
        <td>
            <pre>
{
  "data": {
    "allPosts": [
      { "title": "Lorem Ipsum", views: 254 },
    ]
  }
}
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            <pre>
// number fields get range filters
// -lt, _lte, -gt, and _gte
{
  allPosts({ filter: { views_gte: 200 } }) {
    title
    views
  }
}
            </pre>
        </td>
        <td>
            <pre>
{
  "data": {
    "allPosts": [
      { "title": "Lorem Ipsum", views: 254 },
    ]
  }
}
            </pre>
        </td>
    </tr>
</table>
