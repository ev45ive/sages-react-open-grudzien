```tsx

var tree = [
    { type: ComponentA  },
    { type: ComponentA  },
] 
var currentPos;

function useState(initial){
    currentPos.state = currentPos.state || initial
    
    return [currentPos.state, function setValue(v){
        currentPos.state = v;
        currentPos.dirty = true
    }]
}

function ComponentA(){
    const [value, setValue ] = useState(0)

    return {
        type:'div', 
        props: { onClick: () => setValue(value+1) , children: value }
    }
}

var branch = tree[0]
currentPos = branch
debugger;

vdom = currentPos.type()
vdom.props.children  == 0
vdom.props.onClick()

vdom = currentPos.type()
vdom.props.children  == 1
vdom.props.onClick()

vdom = currentPos.type()
vdom.props.children  == 2

```