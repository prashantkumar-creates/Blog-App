import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
       type:String,
       require:true,
       unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    profilePic:{
        type:String,
       default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACUCAMAAADIzWmnAAAAM1BMVEXk5ueutLfq7O2lrLDn6eqrsbS5vsHg4+Sxt7q8wcO2u77X2tvGyszBxsior7PU19nM0NJA8B7mAAADuElEQVR4nO2b2ZLjIAxFgQizmeX/v3awM51OOpsAW9hV3Jd05aVPSSAJuGFsaGhoaGhoaGhoaGhoaGjoSAIAplblP3vDvBII5pI3ZrLWTmZODsSxOHP84sQ5l5Lz9WP5NI4dhxLAeRn4X8mgZ3cQSlCGyyfCKyb3SvTmWwmfQ3hHeZm7ZxyifhPDG6XtnHDwXwhXytQTUk0IRM6DV90olUUh5kiaXozq21K8h+yEiI3iCjn1iKTArcUb5ExfKFE7+gGSfHdDLETMcsSMShcjSk2bbWHKw0icbXCfevRbaUXIyKYaxLy3CRErNsyqQBdIqFmNayA92bZRlzrELKpAitLyfRdIsq1dXhtvjIYmkBCrETlVsmGuTnXe2ZGEMR8D60U07Va06ntIkupT1wd/dKFAZKlhOeYFSXGSLR5uH0VSIUXdPHFj9BSMTVuGc4qWLZpSzTlF8WllpDjEDsZjMJKsxzPs67I7lL8iqY9NoxnVJJ6aZgqSft0699DMjy2IRPOjqj1dr6KZw89wnjnDubDtfE2EeIp7ihPc95zi3ozV7hpJeZF7gnvcU9yHV70rhJn2FekE7zOneOdi4AuXZA83gCh5GiY6IzzpBO/XZT6AqQvhYu3B+yn6mXyQvhRp+vlScGOa7OvvwfikgnW9LWdf/Ga5AXb3m2UJN7317elD+PbY4tCMr/2P/DD+x0Xwykcaj5Dle/33406LjPHJsYP5ca968DUfDXAlUo9iih2GFAQoF9Oc02y1/lmL2lrjfUpOdU85gEtGZzQppfxTf67faG3nbnsnLz03TyEgemEI2kdH3bJBqBy/FzXxLafUUy6WZJj5PyXL37WWD5icz0RuCpWbSu2dlAxT2j3nADmELde4cu8WDmpG7JGvCvv92kKoGX+A+Sgp/T7DBqSNCFdKvsMJB6JtepZ5VkjbUgLzTTvlNeS05SEC4vaEi6TfjnHeOM2/kBv9bgV/0q+B5GmDfFde2aIV2vMNbc4tDGRrFYLdluKvpG1r4aUXofSQVTfzNZC6Ot0Uif6BrBws998ud5B1d6gQqaK4QpqKOgmKErHugUlZUkRe8XzT6DSqkS5F3LkDvlIofcEhz/SioiGoQ6b5UoBKqmSblb5aoeABQnQJIy8yekG976SRER3IPqtxFbol0pfvX0VcINv8ZG1CnxT7pRrfbPoUnqsCrmsTDzyPkqjxh3K0fSGUwUa0/KSsXShLmuiKiBwjOzNiWo3ruhw5x2yaeOkrlDlb9NUxnkGHhoaG/gGbATXNNn26HgAAAABJRU5ErkJggg=="
    },
},{timestamps:true})

const User = mongoose.model('User',userSchema);
export default User;
