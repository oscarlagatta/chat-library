import {useParams} from "react-router";
import {useQuery} from "@tanstack/react-query";
import {getClient} from "@/fake/fake-data.ts";
import NoContactSelected from "./NoContactSelected.tsx";
import ContactInfoSkeleton from "./ContactInfoSkeleton.tsx";

export default function ContactDetails() {

    const { clientId } = useParams();

    const { data: client, isLoading } = useQuery({
        queryKey: ['client', clientId],
        queryFn: () => getClient(clientId ?? ''),
        enabled: clientId !== undefined,
    });

    if (!client) {
        return <NoContactSelected />
    }

    if (isLoading && !client) {
        return <ContactInfoSkeleton />
    }



    return (<div>Client not found</div>)
}