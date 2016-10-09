# Astro Weight Calculator jQuery

<img src="http://i.imgur.com/x189kBb.png" />

For this project, I created a simple weight calculator using jQuery that would be used by future astronauts to calculate their weight on the surface of our planets as well as the moon and the sun of our solar system.

## The tasks were as follows:

1. Create a basic HTML page, and make sure it has the following HTML elements.
    - An `input` element for the user to enter their weight.
    - A `select` element for the user to select a planet, populated with `option` elements where the value attribute is set to the surface gravity for that planet, and the content inside of the `option` elements represents the name of that planet.
    - A `button` element for the user to calculate their weight based on the above inputs.
    - A `p` element to display the expected output.

2. Write the following JavaScript in your `index.js` file
    - Create a function that will be called when the user clicks on the `button` element you added to your HTML.
    - This function should grab the values entered by the user from the `input` element and the `select` element.
    - The function should then calculate the weight of the user on the selected planet, and show the weight to the user in the `p` element you added to your HTML.
    
3. Use Bootstrap to style your html according to one of the available layouts.

4. Populate the select element options _dynamically_ using this array of arrays:

```javascript
var planets = [
  ['Sun', 27.9],
  ['Mercury', 0.377],
  ['Venus', 0.9032],
  ['Earth', 1],
  ['Moon', 0.1655],
  ['Mars', 0.3895],
  ['Jupiter', 2.640],
  ['Saturn', 1.139],
  ['Uranus', 0.917],
  ['Neptune', 1.148],
  ['Pluto', 0.06]
];     
```
## Planet Data
`
<table>
    <thead>
        <tr>
            <th>Planet Name</th>
            <th>Multiple of Earth Gravity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Sun</td>
            <td>27.9</td>
        </tr>
        <tr>
            <td>Mercury</td>
            <td>0.377</td>
        </tr>
        <tr>
            <td>Venus</td>
            <td>0.9032</td>
        </tr>
        <tr>
            <td>Earth</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Moon</td>
            <td>0.1655</td>
        </tr>
        <tr>
            <td>Mars</td>
            <td>0.3895</td>
        </tr>
        <tr>
            <td>Jupiter</td>
            <td>2.640</td>
        </tr>
        <tr>
            <td>Saturn</td>
            <td>1.139</td>
        </tr>
        <tr>
            <td>Uranus</td>
            <td>0.917</td>
        </tr>
        <tr>
            <td>Neptune</td>
            <td>1.148</td>
        </tr>
        <tr>
            <td>Pluto</td>
            <td>0.06</td>
        </tr>
    </tbody>  
</table>
