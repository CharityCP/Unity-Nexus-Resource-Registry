import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

function ResourceForm({ onResourceAdded, 
                        editingResource,
                        onEditComplete
                    }) {
const [type, setType] = useState("");
const [quantity, setQuantity] = useState(""); 
const [status, setStatus] = useState("");
const [name, setName] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);
useEffect(() => {
    if (editingResource){
    setName(editingResource.name);
    setType(editingResource.type);
    setQuantity(editingResource.quantity);
    setStatus(editingResource.status);
}
}, [editingResource]);

async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

const resourceData = {
    name,
    type,
    quantity: Number(quantity),
    status
};

const {data, error } = editingResource
? await supabase 
    .from("resources")
    .update(resourceData)
    .eq("id", editingResource.id)
    .select()
: await supabase
    .from("resources")
    .insert ([resourceData])
    .select();
        
    if (error) {
        console.error("Error adding resources:" , error.message);
        setIsSubmitting(false);
        return;
    }
    console.log("Resource added:" .data);
    setName("");
    setType("");
    setQuantity("");
    setStatus("");

    if (onResourceAdded) {
        onResourceAdded();
    }

    if (editingResource && onEditComplete) {
        onEditComplete();
    }
    setIsSubmitting(false);
}
return (
    <form onSubmit={handleSubmit}>
<label htmlFor="resource-name">
    Resource Name
</label>

<input
    id="resource-name"
    type="text"
    value={name}
    onChange={(event) => setName(event.target.value)}
    required
/>

    <label htmlFor="resource-type">
    Type
    </label>

    <input
        id="resource-type"
        type="text"
        value={type}
        onChange={(event) => setType(event.target.value)}
    />

    <label htmlFor="resource-quantity">
    Quantity
    </label>

    <input
        id="resource-quantity"
        type="number"
        min="0"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
    />

    <label htmlFor="resource-status">
    Status
    </label>

<select
    id="resource-status"
    value={status}
    onChange={(event) => setStatus(event.target.value)}
>
    <option value="">Select Status</option>
    <option value="Available">Available</option>
    <option value="Low Stock">Low Stock</option>
</select>

    <button type="submit" disabled={isSubmitting}>
        {isSubmitting 
        ? editingResource
        ? "Saving..."
        : "Adding..."
    : editingResource
        ? "Save Changes"
        : "Add Resource"}
    </button>
    </form> );

    
}

export default ResourceForm;
