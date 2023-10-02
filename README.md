Multi Level Nested Accordion

HTML Format

```
<div class="acc">
        <div class="acc__hold">
            <div class="acc__item">
                <a href="#" class="acc__opener">Opener</a>
                <div class="acc__content">
                    <div class="acc__content--wrap">
                        Your Content
                    </div>
                    // for nested
                    <div class="acc__hold">
                        <div class="acc__item">
                            <a href="#" class="acc__opener">Opener</a>
                            <div class="acc__content">
                                <div class="acc__content--wrap">
                                    Your Content
                                </div>
                            </div>
                        </div>
                        <div class="acc__item">
                            <a href="#" class="acc__opener">Opener</a>
                            <div class="acc__content">
                                <div class="acc__content--wrap">
                                    Your Content
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="acc__item">
                <a href="#" class="acc__opener">Opener</a>
                <div class="acc__content">
                    <div class="acc__content--wrap">
                        Your Content
                    </div>
                </div>
            </div>
            <div class="acc__item">
                <a href="#" class="acc__opener">Opener</a>
                <div class="acc__content">
                    <div class="acc__content--wrap">
                        Your Content
                    </div>
                </div>
            </div>
        </div>
    </div>

```

Needed Css

```
.acc__content {
    transition: height ease-in-out;
}
```
