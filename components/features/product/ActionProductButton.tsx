import { faEllipsis, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@heroui/react";

export default function ActionProductButton(){
    return(
        <div className="flex items-center gap-2">
            <Button isIconOnly variant="outline" className={'rounded-md'}>
                <FontAwesomeIcon icon={faPencil}/>
            </Button>
            <Button isIconOnly variant="outline" className={'rounded-md'}>
                <FontAwesomeIcon icon={faEllipsis}/>
            </Button>
        </div>
    )
}