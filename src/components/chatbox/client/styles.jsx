export const style = {
    chatWithMeButton: {
        cursor: 'pointer',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        borderRadius: '50%',
        // Background 
        backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA/1BMVEX19fUVmvcWmvb19fQUmvn09fcUmvoXmvT29fIAj+z09vT49PG34Pf39fD39PTx9vr29PgYmvHx9vjz9/Hx9/YOnP8AlO748/by9fz79OwYmPz68/IAkfH48/gdl/UTnPPn///s+/7F6PsAkOfu/P379Ohcr+YQk+XE7ftktejw/fiNxeyx2/TY8/7Y+f8dmuz+7/fQ6vma1vaAxPJQqu09oetwuvP2+OqU0e662etKreip2PZ5uuw5pOZ1u+U0lNWQ1vhOoNcxltYljdjH8vlcqNi56/oclN+CuuGcy/F1veJNm9Y7puXd/f9Wsubo7/5xx+5avfFQqvRpuPfI2eFmlrKqAAATy0lEQVR4nO1dC3faxraWRjMjISGN3ugBAiGBCFgmtU3iEz/SPBp6mvg09/T+/99y92C3dWJjgyOBV68+ZyV2lgF92jP7PVuC0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KDBXqE4qqpKiq7rqs0ESdMEwdA0zTR78GWatu1qmiEQ4jiu6+ZTxyHBvi95WxBCTDO1VUVVQk1gKTGAkGCsICmaHsIvGFon6PXi+OXLnmGY+77iLcECs9PrEUkSbEFVFEV38zQtfxoO2+3h8KeyTFNFV1XbdbgQ4RvbiKV9X/OWUPVQV2G16qGTlu2j41cni7nl/wlrvjh5NTv4qWS2acSvXzuuEO/7ireFEupuqueTo+OTRZG1uolIqeeJHJTiBPlR1G3584sXp8ND9vLlS8Pe9xVvAokvNEmRCJFAn7jpv14BOV/0qCjLIkKyJeMVKMYI/ksWseclfjZ/czrJJaJIq3eAP2TfRNYi1hSXGLoCm2tano4LP8EgMiTeAHHA3yJnufpJ5N+KWExa88uDlMS63jE1XWXPlmLAXBXUpqCnZ2+WPixKLG6EJMHyvJifDwe5LQSBMdL3zWQdNMFWtVAfns+7XFiyhR5nx9Hv91EUoSi5OC2nRkeYuvtmsg52OAoHB+PCo3NODjbaZsAybFGugCx/fjxxdWffRNbCddOzCx/0CsKUw9uQoZhQLPetBDZlFBUvJrnxrGwjkwywehIjRjw9WEQR9TAw5BLcWIb9PoXXgYKVYXF7YvHqp9x2hY5gMKaF++YnCKYhMHDStDBvfykiD1ubCu5+cGMSFZelSWzW6RBV3Tc/cKoFxmxFccvLludFFG0quLUMYbF6ydujwzhk8ShN975gJc0WwjAc/FxYskdhYdIfliEsV+p13w0duHf6/g2HJDF9lH8aZ3zjWZa8uXp5gCG8F6X+8UBTVWXfBMFJY0p+VCQUIVD34KBUIcMIzS0Rty6GgrRXd5UJWhwEYXg4bq1uPLDb0InZhKhsiVF2lBudkWPvy3q4jpqyUT556/+g3O4HkiPvw2UqpGq4L0cVXGRbco4y7we33jrwPZ18nqSm5OxJhnFgjvLzzKOWWAdHcIxEGdNlm2j7YigQko67EbJ+0ASuYwgxZV/GXnE23cMqJTzOdUeDN4noWdRDP+jI3M/QQpiHkyibkRiiYmmXgjTN147bC6+++DSCa6lMg94D0KleNrM7hKk7Nf6xxtLw8J0f1aVl/oYse17222AUBJ0dEtSloGMcvvGjSKxnD/4NiKswUJzlocF2yFBiQWi/sWiUWHXswG8YetwdjLqz6SjfIUNm6lcvfPCQwQ+tmSHi8Sa4qcWRq+2GnMK9fSl2vnZFnhGsxRJ+wxDcXZH2+6hoh3HgdMzaNaqrqIxo9lEBoWDN5G4B4mr69iMJHFOoPdiwGRAU2kVk1WokvgMYXA9fHI5iVzVqJijFhIRC+d6L+j8a624D2IpYbF1Oe7lTu80IpVC/eud7kYx3KEPwUCG6Lk7T+mUIG1Gfznzq9yNctym8BQgz4H7SDx9tUntqKmbGJON1lh1KkMcZnKYYfRnw0kivU2fOuGNefZ5Hu2T3N02RZrOppkhGrTE/MWZdq3Zn9H6AzSgmRqw7aq9Ghnb5AUV1u2prCIqW5/0y6BmO87JGhoNxIu+PIaXFKXvpTOuRoalKgit9aomRvJ99yNUbQu8OXxKnHpPRcx0jzy8KnhfdD8MV/KNpr1OPydBNe6SeFVaFWdEn4f2hbteTmnrds1+zC1mkmxav6wH1T9VAr4WhYzLnrLUqfe6TYhS9L3v1NN8YTid9F1Gex9wnw0S0TnW3lvSi68btgq66RfZIUKSyeJHWk7JxNHYp71fJcHiymLXrafPTw8nS2mXItIahZXljtxZNozngke4wYloDCgyLUqiDYnx1EXn9fROEGAph/7eqya1uWPzpQxLNn5R+wtzj2vpVq763O29leXguX0yrDaAUzSE94sz8J21DGnke7vdlGtGt1jhaNQVA7Iu//VReSm991CAUr07fGIIrdIz0syg/xRLK/T5sX8/ztm1EgRvDy/n4W4arn5NToWNr1TEkpivF0qSg6CkOm9y3LNmLrAvLS7Z5HdwQiv3+/Qzf5aZaLUOl4x61qPwUhjiKaB9nBx8X0VYMwQP1519PkvsY4mXJVK269n6zp2hmOvaQ9SQZoojOi7PcHS43fzXXTX42+zj2eY/UXYb+AdP1Chl2FMO4ekuB4ZZZYCQjsT/H6O1ZbsfaZIkf6+bj7XsyKEwLJ9lxOjiJeAvx95qG41dXVyt0TiXBDCfZ9zvicSRwudxVL05TYmhqOlnKsvVwrpyH8Whu4e546A5+EdfVz+kbV7MrLAqrEtHPnsCQB5Me6PZ/q8RVVBKwYeHJ+KFMHU4QArPSOhnmIfuj25+vk/my1Eh15TYiGcT9zd+aIeqDlsFyMcu1UFdtEsdCu/AeKxvLsr84U0OSnmd47e1AxZBUyVDQ7HyMnyBD6iVy8XWqpLouwbvEHeegeHArWnOM3x85KtEG5/Kc36H7CYr+mV0xw8F7b3uGmCIZFIaik55paJrKWMh7qB56RbKclUR31fy4RVf91PczxNEsdyvchwoLy2IrblyLIgQCiM4dQ5AMkwiKws+qvc45xbsGgNIEdFKUnJe6QFJt+tWHSJuul3cyzll1xVJJCcJhtpXPxWs3CGK51nl6u3/SdMM45fXj7/w/3psqIs+/LAeKArY8n2XeQ646FhEE+hVmTRWmHWzHEOjxReZfuvEt38owmRGG01Pf+0Y43AKCWrLGE0eLNUJC9d8tT3wwGEF4UbIKWxcUJhz52zGUgSDKXgw041ZeTIqDAJZqfpp5t80ADyJo90tbjYNeDOvZhYUsWw+bTbqslqFgHydbBXhg1UQ5G6f2N5chGT3iskBzZtntbAGs0eziaMrMuBMQogyOMgpG/8ECl0yLn4IKdaki5OdbBXerg1vZm4E9Um5TJKwXv9Z7nTA/Tjwe4MJ2FcFPyxY/H4aOowiOLoRgUNDqCM2DDL1sWKEMJVhYLzb1SMFCwB705Hlykt7/drrLtMFlN7F4xxHqy91iVoIzkOqhKjAhPCs2yAfItNXWq4ueJN5IujlDnjOWreTLYE0XuuLaYTj4LcNW5llRd/mqHJDYYIpCgkAL24X4eL4LcYYVxocrhhvbeohPUSJH41RZs4oUx9bCOL9MZORF/h9DZxRqoH8004wNcOtwv/+oDDnDg6plmGxKkVLwZKKLMtTWtPbqum2Dk5q+8FEBCvS1ZBLbljQzMEbCZE6t+eN556oZKrAPt2AYeUlycQgiWZMOM01NtUFgg18+t6c9cyr0AkFVBVinzmTJfc7HfcMVwwpXqaAq6TjaSJeC++VZlL4vbaHDQpUfVBeClKdUFEU3gz8Z6opmq1KaMlU1YimA/5AUoiqTxRzxZsQNGGK/rVcXARNHS1/Qx5PB19EHeCgXh9dFWhVE46q62TMgeHIV807a4VrKpmEwRty4vNj8QJ+YtbUK6zOOwS67j7cnrAhaFl2U+sopljSJMcmMR9PSNBljwhrVo2ssCAIgWIjRhn6FLBbDChkaDrFn3cdv7yrPR/HbiXpDhQ+GCNVB+2Q5UUDxrEs76K4NoWP5BSUbt0AguZiEVTJk0mlrM4aYLiaOffPZTNLtwXBcUAqsQ/jx/vdXbHukH76LYKv7G1MsDkfVHYgGhtrBhgzpfOhCAHsdurm6M3lRJGDhosVHwwy0+ylqNtGvxr7lbbpG4aPQskqGimorkwdD85uDkeBMLYdM0XVu3VxH0stjqxtBnI7EaFESxQUdGrNbi4uAd6NpsaMc/gdiRv4OmwHJ3ue0wm5hSbKdsnjIbbvWosiixdCF+8GCqaOq9u+zt4V4U62w5Isy7tlBYH4Tt2oaYUEK1r+1VZ8VsqJxXmENURJs/Wr5OEOKlu0wdPgsFiGO89NlguR+/5rhHEefS1Mwg8C4pVEVDVQsc9Nzf7u6HThNv7pqhQxhMQ3ePHgFK4aef6AzGwxgGErp2ZfC8+hfYUKUeOL4UB/FAVFuvzNTRlr+Wyvqb5enRP6ZWmFTuyS44fTyQTW3MhQfzhwgAPGBO/j0rgvOm4wSLF9zjGDr+OMrPfzGZiiEQZhxXkR4y5JIkg0dtcr40B5NTzOeyl1zGQk/pe6fOVpgKHE8bY9bUQQedF/08M0qRRDI4y5QVF2VSKuRSooEbhfRIRqOkJVsV1zEy0Pdro4h6PnQ+VTwgt7dpXrjqs3l7IzZQqw5zmScrQvQ/fFgpAZM1WIVnAFdYO4o/znbits1kpNpWGWeBtaSfrhE9L7u9WuGc7l7FndAibrli6Uvr4lh0dx/kWrqasAXl6CmqdNZ9pSzUzyJZ1fYoUiIruf/kaMI3XW/r2uyUffIeS3pTnk8hz0lr6nC8b14mYahAW44H3MGCveoeCRveD+WB73YrnDICz8yKqwSuXc/63qRFqchM7Sr02XXS6JoXTkbexb2LwfmS+J2wL9hQX6WYespQwqWZa9nVMhQVWwmDT+IshXdbf/ghjD7CgFWevbe9zwZlCdaM3sHR2Afs6/pS2fa4XZxcJDJfevhrNr9b7TIVVurskIKdktILygsvzufBStPLI5TLT+7aGH4UaSwC9etOz4PAmeXeegYahjbB9nqhmwFmcp97J/aneqPzzjH3fu6TWjUz36duu2TjVXiqqBogHveLp7QRCZ7fQsXH4Me7OWKGYafMnrfBkPZbxAhZRD7bCgNJLZmObjhn4qnnLGVQex0MTBiofL2vfDqPb1bEJLnyddPr/yIl/o29EooRsVp7gyXlvWE1g4E1+DPXF0T3Kr72SV11rqr2Cn+n6/gdM1lb/Nj3UjGxdGEE3yCncBURsXEcBxTqPr0UxDzI13f33UszjOwFogPp9nwei3kUfhdS/Todi1EfzE8mfaAoVk1w5C5Y3xPOvqGM9q4+xDdvOxp3bh4TlsHtR3Ra7e21e3VA6zT4rAehiwk6cX+e4SR15rVNOuEhYJ9tmW/Qi0Ml6VW04FuSSDp2/13sndnLluTtPtB6ILB1KM97kSEwJJyEepBPYdIdd0gdn7h43rHtTzAEMwLwv7PU53Vc95CVQViu+3Cw7UPw1gDHsV47w9dldU0dNgGkor7hsp7YsgTxkl2lvMewHoYcoJa+Glp7elsEDDE1ruBpAo1Df/WNNVRjU5+Wuxy5sdthhR7xUSxiVbTMB5pNaxZ7V19jvjMFrxLpfrnCOnu8VQnpN5p0ZLJPn0QkWXJT0kg/RDDBHcvBvVPijSmgXvawhBJ7NJm3JS2iqHWqX3yhzHtja4WkSdbu5yMsRr7jfkJYLP2WUoqiWN7sqR002iwKoZA8EXKxxXXTFByejrrvT5YXp+B2hVLcNcwXZS8Gr6bmWYxA5OxOvzxhEN3T4GHLVpM6h++8xcYS8+7fPIP3hFDPlrwX7uc1O468WDsU8qferAbhjg7cnY52lvXWVx+8RF+UlXlCcD+rMrW/MdhGK6ulotMpjty4LIZM80dbkOBEMURjI8XiWdZfIjExu1oW+H62BofY+r/mpMg3v1zWpzDhQ/cZLz5UxC2Y7hyRq059i9z14aFs3OGalx+5lKEaKqWgPHGVfOKWU6IvY8J+1Kvk/7SBZth1ccwSTz/dJXbVisvUzwOJeiNBseF59U045MTFKMP7TwVdIjc9iBDNY7dqXtU0PoY4u5iqIfMcBxF2sdTvRTDViX3zK98hKK8OnwKt60Yl6segp3Ogf4ORG37ledtwMwC+p41S3t7f75FLQw97ithf9l2OnVO19sjw9XA+ez899h19v98i7oYZp/bbi9Id+pu180QIXmV1eaH9fxiNnAcEo+E/T/4kUjtFnpKPf4OKISbkccPR3eLy8nzeVpgdQx5gynqW1GUnQxzs9N5Lg+1rIwhmoOD20eeP26zODZILZOgnoIqV6lH/WI8dHWT2K5b5Wn7HwJomioYgvnzIv/9aemYxNV6BHy0/VvCa9yVIer3ZdCLNIr6iSz3+bwnfDNN8ubQAn8km8XzdAhUC59jjT0v6r69bKeCocSaKnQMzTCf7z4EApjKlM5BaaxSVfCXZYmrkZLXyzFaPVjP87BszS3kRVHkvz0/OxyoIdnlEx42xB2GK+nRSJ5by+NXF0XGa+8IifJKcoivR7nfX4kZwy9GUSubnxwflK4easo+YsBHcYeh3McRlfu0++rj1E4nR+f/nfst4JxgrkpWiYnoGkm3Ky/ezA5+T4EeCWKD2c5zUS+3cA9DEctF8WZoxq8d2EzOtBweHM3+OFnMi2z1MOACsFj894/js/ZPRFD11xLRNIMEAbOfwYPk7uC2LsWrSe0JFbPFQe46Ro+ZvBimqIQQZ5qnZTkZAiaTskxz1VFXNVeV2IJpBoQ/tlshz/CpwLdl6CHEnyiQzI/y72tgoP7h6xoCT7gaq3/J7WLuPsPcB3CbIehHhCIIW3XybJ/ouz1uMcTUKmh2XuaK8nyfWbw9bstQFpOT4Wg1EWr/gWtluKVpcGvRdkODES1UnueWehKICwwpuDFea36UhkJghvxY6DPUiU+G3u5iDH5MNhtIhvBsYp7qsMpigBDPS/2fpF5uwU7b/rwYTxw1+GcSFJTRQfeiPdWZFP6D9Odt2O7/zgaCEQh6TaPg9w7iSiq4zYbC2DP1uho0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNDg/xP+D8o/zDKUA5aGAAAAAElFTkSuQmCC)`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '84px',
        // Size
        width: '74px',
        height: '74px',
    },
    avatarHello: { 
        // Position
        position: 'absolute', 
        left: 'calc(-100% - 44px - 28px)', 
        top: 'calc(50% - 24px)', 
        // Layering
        zIndex: '10000',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        padding: '12px 12px 12px 16px',
        borderRadius: '24px', 
        // Color
        backgroundColor: '#f9f0ff',
        color: 'black',
    },
    supportWindow: {
        // Position
        position: 'fixed',
        bottom: '116px',
        right: '24px',
        // Size
        width: '420px',
        height: '530px',
        maxWidth: 'calc(100% - 48px)',
        maxHeight: 'calc(100% - 48px)',
        backgroundColor: 'white',
        // Border
        borderRadius: '12px',
        border: `2px solid #7a39e0`,
        overflow: 'hidden',
        // Shadow
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
    },
    emailFormWindow: { 
        width: '100%',  
        overflow: 'hidden',
        transition: "all 0.5s ease",
        WebkitTransition: "all 0.5s ease",
        MozTransition: "all 0.5s ease",
    },
    stripe: {
        position: 'relative',
        top: '-45px',
        width: '100%',
        height: '308px',
        backgroundColor: '#7a39e0',
        transform: 'skewY(-12deg)',
    },
    topText: { 
        position: 'relative',
        width: '100%', 
        top: '15%', 
        color: 'white', 
        fontSize: '24px', 
        fontWeight: '600',
    },
    emailInput: { 
        width: '66%',
        textAlign: 'center',
        outline: 'none',
        padding: '12px',
        borderRadius: '12px',
        border: '2px solid #7a39e0',
    },
    bottomText: { 
        position: 'absolute', 
        width: '100%', 
        top: '60%', 
        color: '#7a39e0', 
        fontSize: '24px', 
        fontWeight: '600' 
    },
    loadingDiv: { 
        position: 'absolute', 
        height: '100%', 
        width: '100%', 
        textAlign: 'center', 
        backgroundColor: 'white',
    },
    loadingIcon: { 
        color: '#7a39e0', 
        position: 'absolute', 
        top: 'calc(50% - 51px)', 
        left: 'calc(50% - 51px)',  
        fontWeight: '600',
    },
    chatEngineWindow: {
        width: '100%',  
        backgroundColor: '#fff',
    }
}