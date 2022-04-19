function Button(props) {
    const classes = `btn btn-${props.color || "primary"}`;
    return <button className={classes}>{props.children}</button>;
}

export default Button;
