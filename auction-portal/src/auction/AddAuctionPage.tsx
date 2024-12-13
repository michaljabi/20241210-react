import {useForm} from "react-hook-form";
import {FormEvent, useState} from "react";
import {AuctionItem} from "./AuctionItem.ts";
import {auctionService} from "./auction.service.ts";

interface AddAuctionForm {
    title: string;
    imgId: number;
    description?: string;
    price: number;
}

export function AddAuctionPage() {


    const { register, handleSubmit, formState: { errors }, reset } = useForm<AddAuctionForm>({
        mode: "onTouched",
    });



    const [imgId, setImgId] = useState(10)
    const imgUrl = `https://picsum.photos/id/${imgId}/600/600`

    function handleImgIdInput(ev: FormEvent) {
        if(ev.target instanceof HTMLInputElement) {
            setImgId(Number(ev.target.value));
        }
    }

    const onSubmit = handleSubmit(async (values) => {

        const auction: Omit<AuctionItem, 'id'> = {
            imgUrl: imgUrl,
            price: values.price,
            description: values.description,
            title: values.title,
        }
        try {
            const result = await auctionService.addOne(auction);
            console.log(result);
            reset();
        } catch (e: unknown) {
            if(e instanceof Error) {
                console.error(e);
            }
        }
    });

    return (
        <>
            <h2>Dodaj aukcje</h2>
            <section className="mt-2 row">
                <div className="col-6">
                    <img
                        className="img-thumbnail"
                        alt="Photo preview"
                        src={imgUrl}
                    />
                </div>
                <div className="col-6">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="auctionTitle">Auction name</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fa fa-edit"/>
                                  </span>
                                </div>
                                <input
                                    id="auctionTitle"
                                    type="text"
                                    className="form-control"
                                    { ...register("title", { required: "tytuł jest wymagany..." }) }
                                />
                            </div>
                            {
                                errors.title
                                &&
                                <div className="alert alert-danger">
                                    {errors.title?.message}
                                </div>
                            }
                        </div>

                        <div className="form-group">
                            <label htmlFor="auctionPrice">Price</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fa fa-tag"/>
                                  </span>
                                </div>
                                <input
                                    id="auctionPrice"
                                    type="number"
                                    className="form-control"
                                    { ...register("price") }
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="imgId">Photo</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fa fa-image"/>
                                  </span>
                                </div>
                                <input
                                    id="imgId"
                                    type="number"
                                    className="form-control"
                                    value={imgId}
                                    onInput={handleImgIdInput}
                                    { ...register("imgId") }
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="auctionDescription">Description</label>
                            <div className="input-group mb-3">
                                <textarea
                                    id="auctionDescription"
                                    rows={5}
                                    className="form-control"
                                    { ...register("description") }
                                />
                            </div>
                        </div>

                        <div className="text-right">
                            <button className="btn btn-primary" type="submit">
                                <i className="fa fa-gavel"/> Add auction
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
