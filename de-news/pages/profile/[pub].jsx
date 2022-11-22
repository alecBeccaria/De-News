import { useEffect } from "react";
import AppBar from "../../components/appBar";
import { useRouter } from "next/router"
import { useState } from "react";
import { set } from "lodash";

const ProfileView = (props) => {

    var [pub, setPub] = useState();
    const router = useRouter();

    useEffect(() => {
        if (router && router.query) {
            setPub(router.query.pub);
        }
    }, [])

    return(
        <main>
            <div>
                {pub}
            </div>
        </main>
    );
}

export default ProfileView;