# accordion

Used ES6 to create menu
Menu second steps

# Grid Approach To Make Nested Menu

# Animating Height

# Css Tricks

Give your drop display grid

HTML

`

<ul>
    <li>
        <a class="opener">Opener</a>
        <div class="drop">
            <div class="inner">
                your content
            </div>
        </div>
    </li>
</ul>
`

CSS

.drop {
display: grid;
grid-template-rows: 0fr;
transition: grid-template-rows 500ms ease;
}

Give overflow hidden to inner element this inner element must wrap all content

.drop > .inner {
overflow: hidden;
}
